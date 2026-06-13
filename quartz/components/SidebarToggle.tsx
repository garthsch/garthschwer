import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-expect-error - inline script import handled by Quartz bundler
import sidebarScript from "./scripts/sidebar.inline.ts"

const SidebarToggle: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <button
      id="sidebar-toggle"
      class={displayClass ?? ""}
      aria-label="Toggle Left Sidebar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="sidebar-toggle-icon"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
  )
}

SidebarToggle.afterDOMLoaded = sidebarScript

export default (() => SidebarToggle) satisfies QuartzComponentConstructor
