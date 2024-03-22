import { PageProps } from "$fresh/server.ts";

const Layout = (props: PageProps) => {
  const Component = props.Component;

  return (
    <div class="main-div">
      <div class="header">
        <a href="/DictionaryCSR">Client Side</a>
        <a href="/DictionarySSR">Server Side</a>
      </div>
      <h1>My dictionary</h1>
      <Component />
    </div>
  );
};

export default Layout;
