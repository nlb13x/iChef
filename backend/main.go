// PREPROCESSING // adopt adaptive
package main

import (
	"gocv.io/x/gocv"
)

func main() {
	window := gocv.NewWindow("Receipt")

	img := gocv.IMRead("/Use/nipunlamba/iCHEF/assets/IMG_2763.jpg", 0)
	gocv.Threshold(img, &img, 210, 255, gocv.ThresholdBinary)
	window.IMShow(img)
	window.WaitKey(5000)

}
