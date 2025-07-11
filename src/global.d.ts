declare module 'gsap/dist/ScrollSmoother' {
    interface ScrollSmootherType {
        create: (options: {
            wrapper: string
            content: string
            smooth?: number
            effects?: boolean
        }) => void
    }

    const ScrollSmoother: ScrollSmootherType;
    export default ScrollSmoother;
}
