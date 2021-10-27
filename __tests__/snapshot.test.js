import renderer from "react-test-renderer";

test("test inline snapshot", () => {
  expect(renderer.create(<img src={"url"} />).toJSON()).toMatchInlineSnapshot(`
    <picture>
    </picture>
  `);
});
