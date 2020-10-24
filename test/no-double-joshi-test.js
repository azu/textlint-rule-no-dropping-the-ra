import rule from "../src/no-dropping-the-ra";
import TextLintTester from "textlint-tester";
const tester = new TextLintTester();
tester.run("no-dropping-the-ra", rule, {
    valid: [
        "お刺身を食べられない。",
        "見られる",
        "出られる",
        "来られる",
        "![](http://example.com)",
        "[](http://example.com)"
    ],
    invalid: [
        {
            text: "お刺身を食べれない。",
            errors: [
                {
                    message: "ら抜き言葉を使用しています。",
                    line: 1,
                    column: 7
                }
            ]
        },
        {
            text: "女の子が出れないんです",
            errors: [
                {
                    message: "ら抜き言葉を使用しています。",
                    line: 1,
                    column: 6
                }
            ]
        },
        {
            text: "この距離からでも見れる。",
            errors: [
                {
                    message: "ら抜き言葉を使用しています。",
                    line: 1,
                    column: 10
                }
            ]
        },
        {
            text: "今日は来れる？",
            errors: [
                {
                    message: "ら抜き言葉を使用しています。",
                    line: 1,
                    column: 5
                }
            ]
        },
        {
            text: "今日は来れる？",
            errors: [
                {
                    message: "ら抜き言葉を使用しています。",
                    line: 1,
                    column: 5
                }
            ]
        },
        {
            text: "女の子が来れないんです",
            errors: [
                {
                    message: "ら抜き言葉を使用しています。",
                    line: 1,
                    column: 6
                }
            ]
        }
    ]
});
