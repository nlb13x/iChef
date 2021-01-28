package main

import (
	"bufio"
	"fmt"
	"regexp"
	"strings"

	"github.com/otiai10/gosseract"
	"gocv.io/x/gocv"
)

func main() {

	img := gocv.IMRead("/Users/nipunlamba/iCHEF/assets/IMG_2783.png", 0)
	// window := gocv.NewWindow("org")

	// PREPROCESSING //
	//gocv.MedianBlur(img, &img, 5)
	//gocv.Threshold(img, &img, 127, 255, gocv.ThresholdBinary)
	//ocv.AdaptiveThreshold(img, &img, 255, gocv.AdaptiveThresholdMean, gocv.ThresholdBinary, 11, 2)
	//gocv.AdaptiveThreshold(img, &img, 255, gocv.AdaptiveThresholdGaussian, gocv.ThresholdBinary, 11, 2)

	// Text Detection
	client := gosseract.NewClient()
	defer client.Close()
	ImgBuffer, _ := gocv.IMEncode(gocv.PNGFileExt, img)
	client.SetImageFromBytes(ImgBuffer)

	text, _ := client.Text()
	fmt.Println(text)
	fmt.Println("\n")
	scanner := bufio.NewScanner(strings.NewReader(text))
	for scanner.Scan() {
		line := scanner.Text()
		itemRegex := regexp.MustCompile(`\$[0-9]*\.[0-9]{2}`)

		subtotalRegex := regexp.MustCompile(`^(?is)sub\s?total.*[0-9]{2}$`)

		itemVal := itemRegex.FindString(line)
		subtotalVal := subtotalRegex.FindString(line)

		if subtotalVal == "" {
			if itemVal == "" {
				continue
			} else {
				productInfo := itemVal
				productInfo = strings.ReplaceAll(line, productInfo, "")
				productRegex := regexp.MustCompile(`[0-9A-Za-z\s\\\/]*[A-Za-z]{3}`)
				product := productRegex.FindString(productInfo)
				product = strings.TrimSpace(product)
				fmt.Println(product)
				fmt.Println(itemVal)
			}
		} else {
			fmt.Println(subtotalVal)
		}

	}

}
