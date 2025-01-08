import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "one-in.one",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "one-in.one",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Tiny5",
        body: "EB Garamond",
        code: "EB Garamond",
      },
      colors: {
        lightMode: {
          light: "#f3d8e6",
          lightgray: "#adc8eb88",
          gray: "#004FFF",
          darkgray: "#050609",
          dark: "#202746",
          secondary: "#e01a4f",
          tertiary: "#344966",
          highlight: "rgba(255, 127, 17, 0.15)",
          textHighlight: "#df99f088",
        },
        darkMode: {
          light: "#270c1a",
          lightgray: "#142f5288",
          gray: "#ff4f00",
          darkgray: "#f5f6fa",
          dark: "#b9c0df",
          secondary: "#ce259c",
          tertiary: "#9aaecb",
          highlight: "rgba(161, 141, 255, 0.15)",
          textHighlight: "#ff937988",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
