export const imageCache = new Map<string, HTMLImageElement>()

export let assetsPreloaded = false

export function markAssetsPreloaded() {
    assetsPreloaded = true
}