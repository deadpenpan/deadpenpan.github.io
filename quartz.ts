import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  filterFn: (node) => {
    const omit = new Set(["People", "Texts", "Tag Index"])
    return !omit.has(node.displayName)
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
