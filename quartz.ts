import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
export { componentRegistry }

