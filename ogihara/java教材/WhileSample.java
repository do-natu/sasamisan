package sample;

public class WhileSample {

	public static void main(String[] args) {

		/* ■基本的なwhile文の書き方
		 *   while(条件式){
		 *     実行したい処理
		 *    }
		 *   条件式を見て、true(正しい)なら処理を実行する
		 *
		 * ■今回作成するwhile文のサンプル
		 *   「この処理は〇回目の処理です」を10ループさせる
		 */

		int count = 1;
		while(count<=10) {
			System.out.println("この処理は"+count+"回目の処理です");
			count++;
		}

		//あえてfor文と同じサンプルを用意したが、実はこのwhile文、for文で記述することができる(逆も然り)
		//更新処理を必ず記述しないと無限ループが起きるので、注意

		/* ■基本的なdo～while文の書き方
		 *   do{
		 *     実行したい処理
		 *     }while(条件式);
		 * ■今回はサンプル無し(多分内容見ればわかるので)
		 */

	}
}
