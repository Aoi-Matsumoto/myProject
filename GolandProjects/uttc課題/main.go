package main

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
)

// 文字列を整数の配列に変換する関数
func convertStringToIntArray(m string) []int {
	slice := strings.Split(m, ",")
	var array []int
	for _, value := range slice {
		value, _ := strconv.Atoi(value)
		array = append(array, value)
	}
	return array
}

// 各整数の出現回数を数える関数
func countNumberFrequency(a []int) map[int]int {
	var m map[int]int
	for _, value := range a {
		// if _, ok := m[value]; ok {
		// 	m[value]++
		// } else {
		// 	m[value] = 1
		// }
		m[value]++
	}
	return m
}

// 整数の合計をsにする方法が何通りあるかを数える関数
func countCardCombinations(a []int, s int) int {
	//aを降順にソート
	sort.Slice(a, func(i, j int) bool {
		return a[i] > a[j]
	})

	// 整数の合計をsにする方法が何通りあるかを記録するための変数
	var counter = 0

	//再帰関数を使用
	var count func([]int, int)
	count = func(p []int, q int) {

		for index, value := range p {
			x := p[index+1:]
			y := q - value

			fmt.Println(counter, x, y)

			if y < 0 {
				continue
			} else if y == 0 {
				counter++
				continue
			} else {
				count(x, y)
			}
		}
	}

	count(a, s)

	if counter == 0 {
		return -1
	} else {
		return counter
	}
}

// map[int]intのkeyとvalueをkeyの昇順に出力する関数
func printMapKeyAndValue(m map[int]int) {
	var slice []int
	for key := range m {
		slice = append(slice, key)
	}
	sort.Slice(slice, func(i, j int) bool {
		return slice[i] > slice[j]
	})
	for _, num := range slice {
		fmt.Println(num, m[num])
	}
}

func main() {
	var m string
	var s int

	fmt.Scan(&m)
	fmt.Scan(&s)

	a := convertStringToIntArray(m)
	frequencyCount := countNumberFrequency(a)
	combinationCount := countCardCombinations(a, s)

	printMapKeyAndValue(frequencyCount)
	fmt.Println(combinationCount)
}
