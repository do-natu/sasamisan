package sample;

public class SampleMethod {


	/* ■メソッドの作り方■
	 * 戻り値の型  メソッド名(引数リスト){
	 *   実行したい処理
	 * }
	 *
	 * ■メソッドの使い方■
	 * メソッド名(引数);
	 *
	 * ■今回のメソッドの機能概要
	 * メソッド名：culc  ←メソッド名は特に決まりがなければ、何でもよい
	 * 引数      ：int型  a
	 *             int型  b  ←引数(ひきすう)は、このメソッドを使うために必要な情報のこと
	 *                         足し算をするのに、何と何を足すかわからなければ、計算出来ないですよね
	 * 戻り値    ：int型  aとbの足し算の結果
	 */

	//※staticというのは今は気にせずでOK
	//戻り値の型には、計算結果を返すのでint型を指定
	//引数には、計算するために必要な情報を指定
	//実行したい処理に「return」というキーワードがあるが、文字通り「返す」とか「戻る」を意味する
	//aとbを足したものをreturnしていることがわかる
	static int culc (int a , int b) {
		return a+b;
	}

	//計算するメソッド(culc)を使用する例
	//学習の最初はこのメインメソッドの中に処理を記述する事が多い
	//計算するのに必要な情報を予め変数定義しておく(int型のvalue1,value2)
	//culcメソッドを使用して、計算結果をint型のresultに代入する
	//その際に、引数にはvalue1,value2を指定する
	//計算結果を出力するために、System.out.println()を使う(教材に解説あり)
	public static void main(String[] args) {
		int value1 = 10;
		int value2 = 20;

		int result = culc(value1,value2);
		System.out.println(result);

	}

}
