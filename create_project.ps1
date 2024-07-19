# Function to create the project directory and files
function Create-Project {
    param (
        [string]$projectName
    )
    New-Item -ItemType Directory -Path $projectName
    New-Item -ItemType File -Path "$projectName/index.html"
    New-Item -ItemType File -Path "$projectName/script.js"
    New-Item -ItemType File -Path "$projectName/styles.css"
    New-Item -ItemType File -Path "$projectName/README.md"
    Write-Output "Created project: $projectName"
}

# Check if project name is provided
if ($args.Length -eq 0) {
    Write-Output "Please provide a project name."
    exit 1
}

# Create the project
Create-Project -projectName $args[0]
