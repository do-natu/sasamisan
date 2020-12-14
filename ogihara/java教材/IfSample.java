package sample;

public class IfSample {

	public static void main(String[] args) {

		/* ■基本的なif文の書き方
		 * if(条件式){
		 *   実行したい処理
		 *   }
		 *
		 * ■今回作成するif文のサンプル
		 *   変数aが変数bより大きければ、「aはbより大きいです」
		 *   と出力する
		 */

		int a = 30;
		int b = 20;

		if(a>b) {
			System.out.println("aはbより大きいです");
		}

		//if文は条件式を見てtrue(正しい)の場合、ブロック({ })の処理を実行する
		//trueでなかった場合、そのブロック内の処理を実施せず、そのまま下に進む
		//●変数aの値を10に変えてみて実行すると何も処理がされないことがわかる

		//この記述のままでは、if文がtrueではなかった時に何も処理がないので、
		//trueではなかった場合の処理を記述してみる

		/* ■基本的なif～else文の書き方
		 * if(条件式){
		 *   実行したい処理
		 *   }else{
		 *     実行したい処理
		 *   }
		 *
		 * ■今回作成するサンプル
		 *   boolean型の変数flgがtrueなら、「変数flgはtrueです」
		 *   そうでない場合は、「変数flgはfalseです」
		 *   と出力する
		 */

		boolean flg = false;
		if(flg == true) {
			System.out.println("変数flgはtrueです");
		}else {
			System.out.println("変数flgはfalseです");
		}

		//●変数flgの値をtrueに変えてみて期待通りの処理がされているか実行してみる

		//この方法だとtrueなのかfalseなのか見たいな形で、2分岐しかされない
		//この分岐を3分岐,4分岐・・としたい場合の書き方を記述してみる

		/* ■基本的なif～else if～else文の書き方
		 * if(条件式①){
		 *   実行したい処理
		 *   }else if(条件式②){
		 *     実行したい処理
		 *     }else{
		 *       実行したい処理
		 *       }
		 *
		 * ■今回のサンプル
		 *   変数val1の値と変数val2の値を比較して、
		 *   val1がval2よりも大きければ、「変数val1は変数val2より大きいです」
		 *   val1がval2よりも小さければ、「変数val1は変数val2より小さいです」
		 *   それ以外の場合(val1とval2が等しい)は、「変数val1と変数val2の値は同じです」
		 *   と出力する
		 */

		int val1 = 10;
		int val2 = 10;

		if(val1>val2) {
			System.out.println("変数val1は変数val2より大きいです");
		}else if(val1<val2) {
			System.out.println("変数val1は変数val2より小さいです");
		}else {
			System.out.println("変数val1と変数val2の値は同じです");
		}
	}

}
