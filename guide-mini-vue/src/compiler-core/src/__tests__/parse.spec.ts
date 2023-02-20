import { ElementTypes, NodeTypes } from "../ast";
import { baseParse } from "../parse";

describe("parser", () => {
  describe("text", () => {
    test("simple text", () => {
      const ast = baseParse("some text");
      const text = ast.children[0];
      expect(text).toStrictEqual({
        type: NodeTypes.TEXT,
        content: "some text",
      });
    });
  });

  describe("Interpolation", () => {
    test("simple interpolation", () => {
      const ast = baseParse("{{message}}");
      const interpolation = ast.children[0];

      expect(interpolation).toStrictEqual({
        type: NodeTypes.INTERPOLATION,
        content: {
          type: NodeTypes.SIMPLE_EXPRESSION,
          content: "message",
        },
      });
    });
  });

  describe("Element", () => {
    test("simple div", () => {
      const ast = baseParse("<div>hello</div>");
      const element = ast.children[0];

      expect(element).toStrictEqual({
        type: NodeTypes.ELEMENT,
        tag: "div",
        children: [
          {
            type: NodeTypes.TEXT,
            content: "hello",
          },
        ],
      });
    });

    test("element with interpolation", () => {
      const ast = baseParse("<div>{{ msg }}</div>");
      const element = ast.children[0];

      expect(element).toStrictEqual({
        type: NodeTypes.ELEMENT,
        tag: "div",
        children: [
          {
            type: NodeTypes.INTERPOLATION,
            content: {
              type: NodeTypes.SIMPLE_EXPRESSION,
              content: `msg`,
            },
          },
        ],
      });
    });

    test("element with interpolation and text", () => {
      const ast = baseParse("<div>hi,{{ msg }}</div>");
      const element = ast.children[0];

      expect(element).toStrictEqual({
        type: NodeTypes.ELEMENT,
        tag: "div",
        // tagType: ElementTypes.ELEMENT,
        children: [
          {
            type: NodeTypes.TEXT,
            content: "hi,",
          },
          {
            type: NodeTypes.INTERPOLATION,
            content: {
              type: NodeTypes.SIMPLE_EXPRESSION,
              content: "msg",
            },
          },
        ],
      });
    });

    test("Nested element ", () => {
      const ast = baseParse("<div><p>hi</p>{{message}}</div>");
      const element = ast.children[0];

      expect(element).toStrictEqual({
        type: NodeTypes.ELEMENT,
        tag: "div",
        // tagType: ElementTypes.ELEMENT,
        children: [
          {
            type: NodeTypes.ELEMENT,
            tag: "p",
            children: [{ type: NodeTypes.TEXT, content: "hi" }],
          },
          {
            type: NodeTypes.INTERPOLATION,
            content: {
              type: NodeTypes.SIMPLE_EXPRESSION,
              content: "message",
            },
          },
        ],
      });
    });

    test("should throw error when lack end tag  ", () => {
      expect(() => {
        baseParse("<div><span></div>");
      }).toThrow("缺失结束标签：span");
    });
  });
});
