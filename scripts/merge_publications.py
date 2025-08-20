#!/usr/bin/env python3
"""
Merge Google Scholar generated publications with manual overrides.
Creates a final publications JSON file for the website to use.
"""

import json
import os
import sys
from datetime import datetime

try:
    import yaml
except ImportError:
    print("PyYAML not available, skipping override merging", file=sys.stderr)
    yaml = None

def load_generated_publications():
    """Load the generated publications from Google Scholar fetch."""
    generated_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'publications_generated.json')
    
    if not os.path.exists(generated_path):
        print("No generated publications file found, creating empty data", file=sys.stderr)
        return {'publications': [], 'count': 0, 'last_updated': datetime.now().isoformat()}
    
    with open(generated_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def load_overrides():
    """Load manual overrides from YAML file."""
    if yaml is None:
        print("PyYAML not available, no overrides will be applied", file=sys.stderr)
        return {}
    
    overrides_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'publications_overrides.yml')
    
    if not os.path.exists(overrides_path):
        print("No overrides file found", file=sys.stderr)
        return {}
    
    try:
        with open(overrides_path, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f) or {}
    except Exception as e:
        print(f"Error loading overrides: {e}", file=sys.stderr)
        return {}

def merge_publications(generated_data, overrides):
    """Merge generated publications with manual overrides."""
    publications = []
    
    # Process generated publications
    for pub in generated_data.get('publications', []):
        slug = pub.get('slug', '')
        
        # Start with generated data
        merged_pub = pub.copy()
        
        # Apply overrides if they exist
        if slug in overrides:
            override_data = overrides[slug]
            
            # Apply each override field
            for key, value in override_data.items():
                if key not in ['manual_entry', 'custom_order']:  # Special keys
                    merged_pub[key] = value
            
            # Handle custom order
            if 'custom_order' in override_data:
                merged_pub['custom_order'] = override_data['custom_order']
            else:
                merged_pub['custom_order'] = 0
        else:
            merged_pub['custom_order'] = 0
        
        publications.append(merged_pub)
    
    # Add manual publications (those with manual_entry: true)
    for slug, override_data in overrides.items():
        if override_data.get('manual_entry', False):
            manual_pub = override_data.copy()
            manual_pub['slug'] = slug
            if 'custom_order' not in manual_pub:
                manual_pub['custom_order'] = 0
            publications.append(manual_pub)
    
    # Sort publications
    # First by custom_order (desc), then by year (desc), then by citations (desc)
    publications.sort(key=lambda x: (
        -x.get('custom_order', 0),
        -int(x.get('year', 0)) if str(x.get('year', '')).isdigit() else -9999,
        -int(x.get('cited_by', 0)) if isinstance(x.get('cited_by'), (int, str)) and str(x.get('cited_by', '')).isdigit() else 0
    ))
    
    return publications

def main():
    """Main function to merge publications and create final JSON."""
    try:
        # Load generated publications
        generated_data = load_generated_publications()
        
        # Load overrides
        overrides = load_overrides()
        
        # Merge publications
        final_publications = merge_publications(generated_data, overrides)
        
        # Create final output
        final_data = {
            'last_updated': datetime.now().isoformat(),
            'generated_from': generated_data.get('last_updated', ''),
            'scholar_id': generated_data.get('scholar_id', ''),
            'count': len(final_publications),
            'publications': final_publications
        }
        
        # Write final publications file
        output_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'publications_final.json')
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(final_data, f, indent=2, ensure_ascii=False)
        
        print(f"Successfully merged {len(final_publications)} publications")
        print(f"Final data saved to: {output_path}")
        
        return 0
        
    except Exception as e:
        print(f"Error merging publications: {e}", file=sys.stderr)
        return 1

if __name__ == '__main__':
    sys.exit(main())