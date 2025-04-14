#!/bin/bash

# Set the root directory (can be current dir or passed as an argument)
ROOT_DIR=${1:-$(pwd)}
TARGET_SUBFOLDER="$ROOT_DIR/videos"

# Create the target subfolder if it doesn't exist
mkdir -p "$TARGET_SUBFOLDER"

# Loop through subfolders in root (excluding the target folder itself)
for dir in "$ROOT_DIR"/*/; do
    # Skip if it's the target subfolder
    if [[ "$dir" == "$TARGET_SUBFOLDER/" ]]; then
        continue
    fi

    # Move the subfolder into the target folder
    mv "$dir" "$TARGET_SUBFOLDER"
done

echo "All subfolders moved into: $TARGET_SUBFOLDER"
