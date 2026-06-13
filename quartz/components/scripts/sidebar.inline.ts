const toggleSidebar = () => {
  console.log("[SidebarToggle] Toggling sidebar state")
  const isCollapsed = document.body.classList.toggle("sidebar-collapsed")
  localStorage.setItem("sidebar-collapsed", isCollapsed ? "true" : "false")
  
  // Dispatch a resize event to notify dynamic elements (like the Graph view) to redraw
  window.dispatchEvent(new Event("resize"))
}

const handleKeyDown = (e: KeyboardEvent) => {
  const activeEl = document.activeElement
  if (activeEl) {
    const tagName = activeEl.tagName.toLowerCase()
    if (
      tagName === "input" ||
      tagName === "textarea" ||
      activeEl.getAttribute("contenteditable") === "true"
    ) {
      return
    }
  }

  if ((e.metaKey || e.ctrlKey) && (e.key === "\\" || e.key === "b")) {
    e.preventDefault()
    toggleSidebar()
  }
}

function setupSidebarToggle() {
  console.log("[SidebarToggle] setupSidebarToggle called")
  const toggleBtn = document.getElementById("sidebar-toggle")
  if (!toggleBtn) {
    console.log("[SidebarToggle] Button not found in DOM")
    return
  }
  console.log("[SidebarToggle] Button found in DOM, binding listener")

  // Prevent duplicate event listeners
  toggleBtn.removeEventListener("click", toggleSidebar)
  toggleBtn.addEventListener("click", toggleSidebar)

  // Ensure keyboard shortcuts are only bound once globally
  window.removeEventListener("keydown", handleKeyDown)
  window.addEventListener("keydown", handleKeyDown)
}

// Set up listener for SPA navigations
document.addEventListener("nav", setupSidebarToggle)
setupSidebarToggle()
