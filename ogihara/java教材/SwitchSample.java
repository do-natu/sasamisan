package sample;

public class SwitchSample {

	public static void main(String[] args) {

		/* ■基本的なswitch文の書き方
		 * switch(条件値){
		 *   case 値:
		 *     実行したい処理
		 *     break;
		 *   case 値:
		 *     実行したい処理
		 *     break;
		 *     ・
		 *     ・
		 *   default:
		 *     実行したい処理
		 * }
		 * ■今回作成するswitch文のサンプル
		 *   変数numの値を見て、中身が10ならば、「変数numには10が代入されています」
		 *   中身が20ならば、「変数numには20が代入されています」
		 *   中身が30ならば、「変数numには30が代入されています」
		 *   どれにも該当しない場合は、「変数numは10,20,30以外の数字です」
		 *   と表示する
		 */

		int num = 20;
		switch(num) {
			case 10:
				System.out.println("変数numには10が代入されています");
				break;
			case 20:
				System.out.println("変数numには20が代入されています");
				break;
			case 30:
				System.out.println("変数numには30が代入されています");
				break;
			default:
				System.out.println("変数numは10,20,30以外の数字です");
		}

		//●numの値を変えて、実行してみましょう
		//●各caseに入っている「break」を削除するとどういう結果になるか試してみましょう
	}

}
