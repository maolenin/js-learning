#!/bin/bash

# Define the new width for the resized images (e.g., 1024 pixels)
new_width="600"

# Loop through all files that end with .jpg
for file in *.jpg; do
    # Check if the file exists and is a regular file
    if [ -f "$file" ]; then
        # Create the new name for the original file by appending _original
        original_file="${file%.jpg}_original.jpg"

        echo "Processing $file..."

        # Rename the original file
        mv "$file" "$original_file"
        echo "Renamed $file to $original_file"

        # Resize the renamed original file, keeping the aspect ratio, and save it with the original filename
        convert "$original_file" -resize "${new_width}x" "$file"
        echo "Created resized version as $file"
        echo "------------------------------------"
    fi
done

echo "Done."
