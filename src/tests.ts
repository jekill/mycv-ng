let testContext = (<any>require).context("./", true, /\.spec.ts$/);

testContext.keys().forEach((e)=>{console.log(e)});


