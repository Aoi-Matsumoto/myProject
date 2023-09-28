function genBirdsInfo(name: string): string[] {
  return name.split(",");
}

//singBirdsは引数が文字列で戻り値が配列の関数を引数に取る
function singBirds(birdInfo: (x: string) => string[]): string {
  return birdInfo("hato,kiji")[0] + "piyo piyo";
}

console.log(singBirds(genBirdsInfo));
