import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import { getUser } from "./session.server";
import { Navigation } from "~/components/Navigation/Navigation";
import "./globalStyles.css";
import { purpleThemeClass } from "~/themes/purple/theme-style.css";
import { useState } from "react";
import { blueThemeClass } from "~/themes/blue/theme-style.css";
import type { ThemeKey } from "~/themes/context";
import { DEFAULT_THEME, ThemeContext, THEMES } from "~/themes/context";
import { Theme } from "pretty-format";
import { PURPLE_THEME } from "~/themes/purple/theme";
import { BLUE_THEME } from "~/themes/blue/theme";

export const links: LinksFunction = () => {
  return [
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

const getNewThemeKey = (currentTheme: ThemeKey): ThemeKey => {
  if (currentTheme === PURPLE_THEME.key) {
    return BLUE_THEME.key as ThemeKey;
  }
  return PURPLE_THEME.key as ThemeKey;
};

export default function App() {
  const [currentThemeKey, setCurrentThemeKey] = useState<ThemeKey>(
    DEFAULT_THEME.key as ThemeKey
  );
  const currentTheme = THEMES[currentThemeKey];
  return (
    <ThemeContext.Provider value={currentTheme}>
      <html lang="en">
        <head>
          <Meta />
          <Links />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={currentTheme.class}>
          <Navigation
            onSpinnerClick={() => {
              setCurrentThemeKey(getNewThemeKey(currentThemeKey));
            }}
          />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
