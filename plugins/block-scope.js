export default function (babel) {
    const { types: t } = babel;
    return {
      name: "ast-transform",
      visitor: {
        'BlockStatement|SwitchStatement|Program'(path) {
          path.scope.rename('a');
        }
      }
    };
  }
  