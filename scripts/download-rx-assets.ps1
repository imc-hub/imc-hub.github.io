$urls = @(
  "https://rxchallenger.github.io/assets/images/left-image.png",
  "https://rxchallenger.github.io/assets/images/features-icon-1.png",
  "https://rxchallenger.github.io/assets/images/features-icon-2.png",
  "https://rxchallenger.github.io/assets/images/features-icon-3.png",
  "https://rxchallenger.github.io/assets/images/about-icon-01.png",
  "https://rxchallenger.github.io/assets/images/about-icon-02.png",
  "https://rxchallenger.github.io/assets/images/about-icon-03.png",
  "https://rxchallenger.github.io/assets/images/googleplay.png",
  "https://rxchallenger.github.io/assets/images/windows.png",
  "https://rxchallenger.github.io/assets/images/testimonial-author-1.png",
  "https://rxchallenger.github.io/assets/images/testimonial-author-2.png",
  "https://rxchallenger.github.io/assets/images/testimonial-author-3.png",
  "https://rxchallenger.github.io/assets/images/testimonial-author-4.png"
)
$outDir = "E:\imc\website\public\rx-challenger"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }
foreach ($url in $urls) {
  $name = Split-Path $url -Leaf
  $dest = Join-Path $outDir $name
  Write-Host "Downloading $name ..."
  try {
    Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
    Write-Host "  OK"
  } catch {
    Write-Host "  FAIL: $_"
  }
}
Get-ChildItem $outDir | Select-Object Name, Length | Format-Table -AutoSize
