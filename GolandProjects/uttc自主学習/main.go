package main

import (
	"fmt"
	"github.com/samber/lo"
	"strconv"
)

//func filter1(values []int, f func(int) bool) (ret []int) {
//	for _, v := range values {
//		if f(v) {
//			ret = append(ret, v)
//		}
//	}
//	return
//}

//func filter2(values []string, f func(string) bool) (ret []string) {
//	for _, v := range values {
//		if f(v) {
//			ret = append(ret, v)
//		}
//	}
//	return
//}

//func filter[T any](values []T, f func(T) bool) (ret []T) {
//	for _, v := range values {
//		if f(v) {
//			ret = append(ret, v)
//		}
//	}
//	return
//}

func main() {
	ret2 := lo.Filter([]string{"a", "1", "2", "x"}, func(s string, _ int) bool {
		// 数字に変換できる文字だけ抽出
		_, err := strconv.Atoi(s)
		return err == nil
	})
	fmt.Printf("filter2: %v\n", ret2)
}
