import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface pageState {
  pageId: number;
  pageName: string;
}

export interface targetStory {
  student?: string[];
  teacher?: string[];
  admin?: string[];
  other?: string[];
  all?: string[];
}

export interface dataSet {
  id: number;
  name: string;
  place: string[];
  target: string[];
  targetStory: targetStory;
  usetech: string[];
  text: string[];
  img: any;
  child: string[];
}

export default new Vuex.Store({
  state: {
    pageId: 0,
    selectContent: 0,
    topItemCount: 0,
    masterData: [
      {
        id: 0,
        name: 'デスクcloud',
        place: ["all"],
        target: ['学生'],
        targetStory: {
          student: ['大学に登校する', '好きな教室、場所に移動する', '自動的な認証で出席登録', '自分の鞄やpcなどをデスクに置く', '2次元上のコンテンツと3次元上のコンテンツが混在した自分だけの空間で作業できる'],
          teacher: ['先生のやつ']
        },
        usetech: ['電子掲示板'],
        text: ['aaaaaaaaaaaaaaa', '改行したい場合はこれで'],
        img: require('./assets/img/neko.jpg'),
        child: ['授業中名刺交換', 'グループトーク', 'デスクcloud プラグイン', 'デスクcloud ジェスチャー', 'デスクcloud 資料表示', '感情サーモグラフィー', 'デスクcloud 出席管理', 'Day ToDo', '場所チャット', 'デスクcloud 机プラグイン', 'デスクcloud プラグイン'],
      }, {
        id: 1,
        name: '授業中名刺交換',
        place: ['駿河台ホール', '教室'],
        target: ['学生', '先生'],
        targetStory: {},
        usetech: [],
        text: ['電子名刺を用意します。',
          'グループワークでいい成果を出すことができたにも関わらず後日そのメンバーを思い出すことが出来ない、なんてことがなくなります。',
          '詳しい内容は関連したソリューションとして用意してあるので表から子のソリューションをクリックして確認してみてください。'],
        img: null,
        child: ['名刺交換の感情記録', '感情サーモグラフィー', '授業中名刺交換 自己紹介デスクハッキング', '授業中名刺交換 聞き手デスク', '授業中名刺交換 話し手デスク', '授業中名刺交換 ゲスト講師名刺',]
      }, {
        id: 2,
        name: 'グループトーク',
        place: ['駿河台ホール', '教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['授業中に話している人の顔と声を一致させるための機能です。',
          '授業中名刺交換をした時に頂いた名刺が画面端に並べて表示され、名刺と同一人物が話すと名刺の外枠が青く光り誰が話しているかをわかりやすくします。',
          '留学生向けに母国語での名前表示も考えています。'],
        img: null,
        child: []
      }, {
        id: 3,
        name: 'デスクcloud プラグイン',
        place: ['学生APP'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['デスククラウドでの拡張機能を追加することができます。',
          '大学の査定に通ったプラグインがプラグインストアに掲載されます。',
          'プラグインは自己制作することが可能です。機能面でのプラグインでも可能ですし、デザインのみのスキンという形でもストアに申請することは可能です。',
          '学内でプラグインを作ることが可能になるように授業内でやるプログラム言語での制作が基盤となります。'],
        img: null,
        child: []
      }, {
        id: 4,
        name: 'デスクcloud ジェスチャー',
        place: ['all'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['スマホのようなスライドやタップなどを組み合わせたジェスチャーを搭載します。またgoogle',
          'pixelのような空間認知システムを用いて3次元上のジェスチャーも取り入れることで2次元上では不可能だった命令方法を搭載することで数えきれないバリエーションの操作方法が存在します。',
          'プリセットのような初期設定は存在しますが個人での自由な設定も可能です。'],
        img: null,
        child: []
      }, {
        id: 5,
        name: 'デスクcloud 資料表示',
        place: ['all'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['教科書を持ち運ぶ必要はなくなります。',
          'すべて紙媒体などのアナログ教材はデスククラウドで表示、アプリで編集および管理することができます。',
          '授業外の配布ならばプリントならばスキャンをし、取り込みが可能。',
          'また授業中に先生が「ここ重要です！」などキーワードを言ったときは自動的にマーカーを引くなど自動的な補助を予定しています。',
          '教科書は授業料に含め必要なものを事前に購入・ダウンロードをしておく設定になっています。'],
        img: null,
        child: []
      }, {
        id: 6,
        name: '感情サーモグラフィー',
        place: ['all'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['感情によるセンサーをデスククラウドに追加します。',
          '普段の平常時の表情を記憶し、揺れ動く大学生の感情のコントロールをお手伝いします。',
          'データの収集方法として入学初年度の1年間を情報取得期間として確保。',
          '2年次から取得した情報を使い、授業中の目線の切れる回数や瞬きの回数、授業中の表情などから体調やモチベーションの状態を記録。',
          '一人一人のデータを作成し比較をできるようにします。',
          'そのデータを用いて自動的に改善策を提案し、安定した状態へ導けるように寄り添っていきます。'
        ],
        img: null,
        child: ['名刺交換の感情記録', '疲れ度センサー', '捗り度']
      }, {
        id: 7,
        name: 'デスクcloud 出席管理',
        place: ['駿河台ホール', '教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['現在のデジタルハリウッドでは学生証をカードリーダーにタッチすることで出席管理をしていましたがそれを廃止し、デスククラウドのログインに必要な顔認証をもって出席とします。また制度確保のため椅子の感圧によって二重認証をかんがえています。',
          '座学授業など非アクティブ授業など先生が生徒の出席を管理することが困難な場合は上記の認証方法で80％以上の着席率を確認できた場合のみ出席とするなど先生の意志で出席方法をコントロールできるように考えています。',
          'おなかが痛いなど特別な事情がある場合はデスククラウドまたは学生APPから申請します。',
          'また電車の遅延などはデスククラウドを立ち上げたタイミングでルート確認を行い、遅延認証を自動で行います。'],
        img: null,
        child: []
      }, {
        id: 8,
        name: 'Day ToDo',
        place: ['all'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['明日から本気出す病から逃げるため・まず行動してほしい。これらの思いからこの機能を考えました。',
          '大学に来て最初に机に向かったとき、一日や一週間の目標タスクを設定する時間を設けます。またday todoは今日のはかどり度として一日のをわりに進捗具合、集中して作業で来ていたかなどを結果として確認できます。',
          'タスクの内容は簡単なものから大学の課題を推奨するタスクまで幅広く対応し、なおかつ自分でタスクを決めることができます。',
          '課題はパーセンテージで表示し、課題に関係した調査もその中に含みます。提出完了した時に初めて100％になります。',
          'また感情サーモグラフィーにも対応しているので、疲れているときは簡単なタスクを推奨したり体調不調を感知した場合は帰宅するよう促します。'],
        img: null,
        child: []
      }, {
        id: 9,
        name: '場所チャット',
        place: ['All place'],
        target: ['学生', '先生'],
        targetStory: {},
        usetech: [],
        text: ['教室やコワーキングスペースなどでのみ使えるチャットです。',
          '違う空間とのチャットは不可能で、同じ場にいる人間としかできないようになっておりその空間専用のtwitterと考えてフランクに使われることを想像しています。',
          '効果的な使い方としては主に授業中の意見交換や先生への質問、コワーキングスペースに関しては課題の相談などを想定しています。',
          '授業中の特殊機能として授業に関連するトークが白熱した場合先生が認識して授業のテーマに取り上げる機能を考えているので座学の授業でも今まで以上にfreeな授業が生まれると考えています。'],
        img: null,
        child: []
      }, {
        id: 10,
        name: 'デスクcloud 机プラグイン',
        place: ['学生APP'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['大学の規定による審査を通ったプラグインがプラグインストアに並びます。',
          'プラグインには生徒の自主制作をメインに外部発注したものなどを想定しています。',
          'このプラグインを製作するハッカソンを開催したら面白いかもしれませんね。',
          'また別ソリューションのデスク編集考える事が面倒という方には大学からプリセットという形であらかじめカスタマイズしたものを用意しています。'],
        img: null,
        child: []
      }, {
        id: 11,
        name: 'デスクcloud プラグイン',
        place: ['学生APP'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ['デスククラウドでの拡張機能を追加することができます。',
          '大学の査定に通ったプラグインはプラグインストアに掲載されます。',
          'プラグインは自己制作することが可能で、機能面でのプラグインでも可能ですし、デザインのみのスキンという形でもストアに申請することは可能です。',
          'またストアに公開するのではなく個人的に使用するための制作も可能です。',
          '授業で習ったことを生かすための場と考えているので原則として大学内で習得可能なテクノロジーをベースに制作ができるモノを想定しています。'],
        img: null,
        child: []
      }, {
        id: 12,
        name: '名刺交換の感情記録',
        place: ['all'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ["人との出会いは必ず感情がついてまわります。",
          "少し話しただけでとてもワクワクする人や、ちょっと帰りたくなっちゃうような人。",
          "そんな些細な感情を名刺交換時に記録しておきます",
          "細かいデータとして名刺を渡す側は顔が強張っているか、貰う側は俯き気味じゃ無いかなどデスクcloudやアプリを通して記録しておきます。",
          "これによって名刺を見返すときに名前で思い出すのではなく名前と感情を頼り思い出すことができるのでより鮮明に相手を思い出すことができます。"],
        img: null,
        child: []
      }, {
        id: 13,
        name: '疲れ度センサー',
        place: ['all'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ["授業中や課題中などに普段に比べてどれだけ疲れているか、作業に適している日か否かをセンサーによって判断し、状況によってより良い選択を提案します。",
          "判断ソースは瞬きが多かったり、寝てしまっているときなど疲れてるときにしてしまう行動を考えています。"],
        img: null,
        child: []
      }, {
        id: 14,
        name: '集中力',
        place: ['all'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ["授業中や課題中にどれだけ集中しているかを判断し、普段より低かったり高かったりした場合、その集中力を生かせる提案をします。",
          "また、クラス全体の集中度を数値化する事で授業の質の高さも測れると考えています。",
          "判断ソースはスマホの確認回数や目線が定まっていないなどです。"],
        img: null,
        child: []
      }, {
        id: 15,
        name: 'feedback',
        place: ['all'],
        target: ['学生', '先生', '事務局'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 16,
        name: '授業中名刺交換 自己紹介デスクハッキング',
        place: ['駿河台ホール', '教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ["自己紹介をする場合、相手に多くのことを知ってもらいたいのは当たり前ですよね？",
          "自己紹介デスクハッキングは自分が自己紹介をしているときに相手のデスクを自動的に切り替え自分が見せたいものに変えます。",
          "自分が話したい話題や、頑張ってきた課題・制作物などを表示することも可能です。",
          "あえての暗転というのも尖ってて面白いかも？",
          "よりよく自分を見せられるようにすれば、相手にとってとても印象に残る自己紹介となるでしょう。"],
        img: null,
        child: []
      }, {
        id: 17,
        name: '授業中名刺交換 聞き手デスク',
        place: ['駿河台ホール', '教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ["相手の名刺から多くの情報が出てきます。",
          "聞き手デスクは相手の多くの状況から自分の見たい情報を見ることが出来ます。",
          "名刺を中心に近い趣味(自分が好きな趣味)ほど大きく表示され、そのどれかをクリックした際に細かい好きなものなどが表示されます。",
          "音楽→アーティスト→曲名など。",
          "ぜひ、自分と共通している部分を見つけて会話をより良いものとしてください。"
        ],
        img: null,
        child: []
      }, {
        id: 18,
        name: '授業中名刺交換 話し手デスク',
        place: ['駿河台ホール', '教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ["話をしている際に相手が何の話題に興味をもっているか見れるようにします。",
          "自分が話している中で相手は話を聞いてくれているのか、それとも自分の違うことに興味を持っているのか、聞き手デスクの掘り下げ具合などを見ることができるようにすることで円滑にまだ相手に応じた自己紹介を進めることが可能です。"],
        img: null,
        child: []
      }, {
        id: 20,
        name: '授業中名刺交換 ゲスト講師名刺',
        place: ['駿河台ホール', '教室'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ["外部からわざわざ講師を呼んで授業をすることありますよね？",
          "ためになった話や、面白いと思えたことが多々あったにも関わらず、のちに「名前なんだっけ？」のようなことがありませんか？",
          "これからは、ゲスト講師にも名刺交換のシステムを使ってもらいます。",
          "これで講師の名前や会社などを忘れることがなくなります。",
          "名刺管理の際に見直すこともできますし、いっぱい外部の人の名刺を集める名刺コレクターになることも。。。！"],
        img: null,
        child: []
      }, {
        id: 21,
        name: 'プライベート名刺交換',
        place: ['All place'],
        target: ['学生', '先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 30,
        name: '学生APP 名刺管理',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: ["多くの人と名刺を交換していくと管理がしにくくなっていきます。",
          "そんな不便をなくすために管理システムを追加します。",
          "すでにもっている名刺を見直す機会にもしてほしいので、新着や変化があった名刺などは上位に表示するようになっています。",
          "他には自分がどうゆう色の人と交換しやすい傾向にあるかを統計で表示します。",
          "これから先自分に必要な人はだれかというものを名刺管理アプリはピックアップしてくれるので、有効に活用することが出来れば更なる成長が見込めるでしょう。"
        ],
        img: null,
        child: ['名刺管理 MyColor時系列', '名刺管理　友達ジャンル', '名刺管理　名刺リストアップ', '名刺管理　友達全体のMyColor傾向', '名刺管理　今必要な名刺', '名刺管理　急成長名刺', '名刺管理　これからかかわる可能性',]
      }, {
        id: 31,
        name: '名刺管理 MyColor時系列',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 32,
        name: '名刺管理　友達ジャンル',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 33,
        name: '名刺管理　名刺リストアップ',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 34,
        name: '名刺管理　友達全体のMyColor傾向',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 35,
        name: '名刺管理　今必要な名刺',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 36,
        name: '名刺管理　急成長名刺',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 37,
        name: '名刺管理　これからかかわる可能性',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 22,
        name: '学生APP',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: ['学生APP 学生証', 'MyColor', '捗り度', '学生APP 名刺管理', 'プライベート名刺交換', '学生APP リアルタイム教科書', '学生APP リアルタイムPDF', '学生APP デスクcloud編集', '学生APP デスクプラグインの申請', '学生APP ラッキーDay', 'Day ToDo',]
      }, {
        id: 23,
        name: '学生証',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: ['学生証　電子化', 'MyColor', '捗り度',]
      }, {
        id: 24,
        name: 'MyColor',
        place: ['App'],
        target: ['学生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: ['MyColor 卒業証書', 'MyColor メンタル色', 'MyColor テクニック色', 'MyColor MyColor単位査定申請',]
      }, {
        id: 40,
        name: '捗り度',
        place: ['all'],
        target: ['学生', '先生'],
        targetStory: {},
        usetech: [],
        text: ["今日一日、今週一週間、自分の作業がどれだけ滞りなく出来たかを捗り度として表示します。",
          "まずday to do と連携し、一日のなすべき課題や目標を設定します。",
          "次に授業中、感情サーモグラフィーと連携し、どれだけ集中できているかを参考にデータ収集をします。当日の授業から得られたテクニック色なども見れるようにします。",
          "また、やる気に満ち溢れ自分の目標以上にやってしまった場合、その作業がいいものだったかどうかを判定し比較的無駄になることだった場合は改善策を用意します。",
          "最終的に全体をまとめ、平均的な捗り度から今日一日との差分を出し、低下していた場合は要因追及を提案します。",
          "授業内容的に捗らないのであれば、feed backで先生に対して改善案の提案。",
          "メンタル的にきつい状況であれば事務局に頼ることを視野に入れる。など",
          "要因は一日監視をして改善を促すのではなく自分で要因を追求し改善をするための助けとするためのシステムです。"],
        img: null,
        child: []
      }, {
        id: 41,
        name: '学生証　電子化',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 42,
        name: 'MyColor 卒業証書',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 43,
        name: 'MyColor メンタル色',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 44,
        name: 'MyColor テクニック色',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 45,
        name: 'MyColor MyColor単位査定申請',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 46,
        name: '学生APP 学生証',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 47,
        name: '学生APP 名刺管理',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 48,
        name: 'プライベート名刺交換',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 49,
        name: '学生APP リアルタイム教科書',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 50,
        name: '学生APP リアルタイムPDF',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 51,
        name: '学生APP デスクcloud編集',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 52,
        name: '学生APP デスクプラグインの申請',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 53,
        name: '学生APP ラッキーDay',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 54,
        name: 'Day ToDo',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: ['Day ToDo 取得テクニック色', 'Day ToDo 達成している比率が高いタスク', 'Day ToDo 余韻で走ったタスク', 'Day ToDo 捗り度',]
      }, {
        id: 55,
        name: 'Day ToDo 取得テクニック色',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 56,
        name: 'Day ToDo 達成している比率が高いタスク',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 57,
        name: 'Day ToDo 余韻で走ったタスク',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 58,
        name: 'Day ToDo 捗り度',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 59,
        name: 'MR授業',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: ['MR授業 空間タイマー', 'MR授業 現実変更', 'MR授業 質問翻訳', 'MR授業 学生の食いつきポイント', 'MR授業 場所チャット確認', 'MR授業 グループトークアシスト', 'MR授業 MyColor判断', 'MR授業 学生のMyColor判断', 'MR授業 投票ツール', 'MR授業 掘り下げ',]
      }, {
        id: 60,
        name: 'MR授業 空間タイマー',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 61,
        name: 'MR授業 現実変更',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 62,
        name: 'MR授業 質問翻訳',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 63,
        name: 'MR授業 学生の食いつきポイント',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 64,
        name: 'MR授業 場所チャット確認',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 65,
        name: 'MR授業 グループトークアシスト',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 66,
        name: 'MR授業 MyColor判断',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 67,
        name: 'MR授業 学生のMyColor判断',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 68,
        name: 'MR授業 投票ツール',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 69,
        name: 'MR授業 掘り下げ',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 70,
        name: 'feedback',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: ['feedback 授業印象', 'feedback クラスの授業反応', 'feedback 授業から学べるテクニック色', 'feedback キーポイント集中度', 'feedback 授業データ', 'feedback 遅延情報', 'feedback 前年との差分', 'feedback 学生のMyColor基準',]
      }, {
        id: 71,
        name: 'feedback 授業印象',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 72,
        name: 'feedback クラスの授業反応',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 73,
        name: 'feedback 授業から学べるテクニック色',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 74,
        name: 'feedback キーポイント集中度',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 75,
        name: 'feedback 授業データ',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 76,
        name: 'feedback 遅延情報',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 77,
        name: 'feedback 前年との差分',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 78,
        name: 'feedback 学生のMyColor基準',
        place: ['教室'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 79,
        name: 'カフェテリア',
        place: ['カフェテリア'],
        target: ['学生', '先生', '事務局', '外部'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 80,
        name: 'コワーキングスペース',
        place: ['コワーキングスペース'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: ['コワーキングスペース 離席タスク', 'コワーキングスペース 離席まで後何%？', 'コワーキングスペース コワーキングチャット',]
      }, {
        id: 81,
        name: 'コワーキングスペース 離席タスク',
        place: ['コワーキングスペース'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 82,
        name: 'コワーキングスペース 離席まで後何%？',
        place: ['コワーキングスペース'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 83,
        name: 'コワーキングスペース コワーキングチャット',
        place: ['コワーキングスペース'],
        target: ['先生'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 83,
        name: 'エントランス',
        place: ['エントランス'],
        target: ['学生', '先生', '事務局', '外部'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: ['エントランス 入館受付', 'エントランス 待ち合わせ', 'エントランス 学内システム使用権原', 'エントランス おいでエレベータ', 'エントランス リモート会議',]
      }, {
        id: 84,
        name: 'エントランス 入館受付',
        place: ['エントランス'],
        target: ['学生', '先生', '事務局', '外部'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 85,
        name: 'エントランス 待ち合わせ',
        place: ['エントランス'],
        target: ['学生', '先生', '事務局', '外部'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 86,
        name: 'エントランス 学内システム使用権原',
        place: ['エントランス', '外部APP'],
        target: ['学生', '先生', '事務局', '外部'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 87,
        name: 'エントランス おいでエレベータ',
        place: ['エントランス'],
        target: ['学生', '先生', '事務局', '外部'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 88,
        name: 'エントランス リモート会議',
        place: ['エントランス'],
        target: ['学生', '先生', '事務局', '外部'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 89,
        name: '自動販売機',
        place: ['all'],
        target: ['学生', '先生', '事務局', '外部'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 90,
        name: '教室',
        place: ['駿河台ホール', '教室'],
        target: ['学生', '先生', '事務局', '外部'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: ['教室 空間時間', '教室 サークル利用',]
      }, {
        id: 91,
        name: '教室 空間時間',
        place: ['駿河台ホール', '教室'],
        target: ['学生', '先生', '事務局', '外部'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 92,
        name: '教室 サークル利用',
        place: ['駿河台ホール', '教室'],
        target: ['学生', '先生', '事務局', '外部'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 93,
        name: '事務局',
        place: ['事務局'],
        target: ['学生', '先生', '事務局'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: ['事務局 事務局頼りそうな人リスト', '事務局 MyColor名刺の発行', '事務局 教室へのアクション',]
      }, {
        id: 94,
        name: '事務局 事務局頼りそうな人リスト',
        place: ['事務局'],
        target: ['学生', '先生', '事務局'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 95,
        name: '事務局 MyColor名刺の発行',
        place: ['事務局'],
        target: ['学生', '先生', '事務局'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 96,
        name: '事務局 教室へのアクション',
        place: ['事務局', '駿河台ホール', '教室'],
        target: ['学生', '先生', '事務局'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 97,
        name: '外部APP',
        place: ['外部APP'],
        target: ['外部'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 98,
        name: 'LabProto',
        place: ['LabProto'],
        target: ['学生', '先生', '事務局', '外部'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      }, {
        id: 99,
        name: '長期リマインダー',
        place: ['学生APP'],
        target: ['学生', '先生', '事務局'],
        targetStory: {},
        usetech: [],
        text: [],
        img: null,
        child: []
      },
    ] as dataSet[],

    showData: [] as dataSet[],

    datalevelName: [] as string[],

  },
  getters: {
    getTopItemCount(state) {
      return state.topItemCount;
    },
    getPageId(state) {
      return state.pageId;
    },
    getMasterData(state) {
      return state.masterData;
    },
    getShowData(state) {
      return state.showData;
    },
    getDatalevelName(state) {
      return state.datalevelName;
    }
  },
  mutations: {
    setTopItemCount(state, newItemCount: number) {
      state.topItemCount = newItemCount;
    },
    setPageId(state, pageId: number) {
      state.pageId = pageId;
    },
    setShowData(state, dataSet: dataSet[]) {
      state.showData = dataSet
    }
  },
  actions: {
    changeTopItemCount({ commit }, newItemCount: number) {
      commit('setTopItemCount', newItemCount);
    },
    changePageId({ commit }, pageId: number) {
      commit('setPageId', pageId);
    },
    updateShowData({ commit }, dataSet: dataSet[]) {
      commit('setShowData', dataSet);
    }
  }
})
