import React from 'react'

// Theme context，默认的 theme 是 “light” 值
const ThemeContext = React.createContext('light');

// 用户登录 context
const UserContext = React.createContext({ name: 'Guest'});

function Layout() {
  return (
    <div>
      <Content />
    </div>
  );
}

// 一个组件可能会消费多个 context
function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <div user={user} theme={theme}>
              {`user: ${user}, theme: ${theme}`}
            </div>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

class Demo4 extends React.Component {
  render() {
    const {signedInUser, theme} = {signedInUser:'Guest', theme:'light'};

    // 提供初始 context 值的 App 组件
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default Demo4