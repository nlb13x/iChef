// PREPROCESSING // adopt adaptive
package main

import (
	"gocv.io/x/gocv"
)

func main() {
	window := gocv.NewWindow("Original")

	img := gocv.IMRead("/Users/nipunlamba/iCHEF/assets/IMG_2763.jpg", 0)

	gocv.Threshold(img, &img, 127, 255, gocv.ThresholdBinary)
	// gocv.AdaptiveThreshold(img2, &img2, 255, gocv.AdaptiveThresholdMean, gocv.ThresholdBinary, 11, 2)
	// gocv.AdaptiveThreshold(img3, &img3, 255, gocv.AdaptiveThresholdGaussian, gocv.ThresholdBinary, 11, 2)

	window.IMShow(img)
	window.WaitKey(10000)

}
