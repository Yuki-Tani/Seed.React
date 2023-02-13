import React, { useEffect, useState } from 'react';
import TopPageView from './components/TopPageView';

export type ViewId =
  "top" |
  "page1" |
  "page2";

export class ViewController {
  constructor(
    private readonly setViewId: (id: ViewId) => void
  )
  {
  }

  public switch(id: ViewId) {
    this.setViewId(id);
  }
}

export type PageViewProps = {
  controller: ViewController,
}

export default function AppView(): JSX.Element {
  const [viewId, setViewId] = useState<ViewId>("top");
  const [isNarrow, setIsNarrow] = useState(false);
  const [viewController, ] = useState(new ViewController(setViewId));

  function onResize() {
    const isNarrowWindow = window.matchMedia("(max-width: 500px)").matches;
    setIsNarrow(isNarrowWindow);
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
  }, []);

  return (
    <div id="app" className={
      `${ isNarrow ? " is-narrow" : "" }`
    }>
      <header>
        <p>Seed.React</p>
      </header>
      <nav>
        <ul>
          <li><button onClick={() => viewController.switch("top")}>top</button></li>
          <li><button onClick={() => viewController.switch("page1")}>page1</button></li>
          <li><button onClick={() => viewController.switch("page2")}>page2</button></li>
        </ul>
      </nav>
      <main>
        {
          (viewId === "top") ?
            <TopPageView controller={viewController} />
          : (viewId === "page1") ?
            <p>page 1 sample</p>
          : (viewId === "page2") ?
            <p>page 2 sample</p>
          : // else
            <div />
        }
      </main>
      <footer>
        <p>ver 0.0.1 / © Yuki Tani</p>
      </footer>
    </div>
  );
}
