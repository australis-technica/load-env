describe("load-env", ()=>{
    it("works", async ()=>{
        process.env.NODE_ENV ="test";
        await import( "../src");
        expect(process.env.IT_WORKS).toBe("true");
    })
})