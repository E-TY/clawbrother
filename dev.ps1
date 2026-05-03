# Refreshes PATH (fixes "node/npm not recognized" in some IDE terminals), then runs the dev server.
$env:Path =
  [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" +
  [System.Environment]::GetEnvironmentVariable("Path", "User")

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  $fallback = "C:\Program Files\nodejs"
  if (Test-Path (Join-Path $fallback "node.exe")) {
    $env:Path = "$fallback;$env:Path"
  }
}

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Error "Node.js not found. Install from https://nodejs.org or restart Cursor after installing."
  exit 1
}

Set-Location $PSScriptRoot

# Use npm.cmd so PowerShell does not try to run npm.ps1 (blocked when ExecutionPolicy is Restricted).
$npmCmd = Join-Path $env:ProgramFiles "nodejs\npm.cmd"
if (-not (Test-Path $npmCmd)) {
  Write-Error "npm.cmd not found at $npmCmd. Is Node.js installed?"
  exit 1
}
& $npmCmd run dev
