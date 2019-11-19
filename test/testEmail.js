const { remote } = require('webdriverio');
async function functionName() {
    try {
        const browser = await remote({
            logLevel: 'trace',
            capabilities: {
                platformName: "Android",
                platformVersion: "10",
                deviceName: "emulator-5554",
                appPackage: "com.google.android.gm",
                appActivity: "com.google.android.gm.ConversationListActivityGmail",
                automationName: "UiAutomator2"
            }
        })


        act1=await browser.findElement("xpath","/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.TextView")
        await browser.elementClick(act1["ELEMENT"])
        await browser.pause(10000)

        act2=await browser.findElement("xpath", "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout")
        await browser.elementClick(act2["ELEMENT"])
        await browser.pause(10000)

        act3=await browser.findElement("xpath", "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView")
        await browser.elementClick(act3["ELEMENT"])
        await browser.pause(10000)

        act4=await browser.findElement("xpath", "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.support.v7.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.Button")
        await browser.elementClick(act4["ELEMENT"])
        await browser.pause(10000)

        act5=await browser.findElement("xpath", "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.support.v7.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.Button")
        await browser.elementClick(act5["ELEMENT"])
        await browser.pause(10000)
        
        let elm=await browser.$("~Compose")
        await browser.pause(10000)
        await browser.elementClick(elm['elementId'])
        await browser.pause(10000)

        act6=await browser.findElement("xpath", "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.support.v7.widget.LinearLayoutCompat/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button")
        await browser.elementClick(act6["ELEMENT"])
        await browser.pause(10000)

        let elm3 = await browser.findElement("id","to")
        await browser.pause(10000)
        await browser.elementSendKeys(elm3['ELEMENT'],"shira.n@elevation.ac‏")
        await browser.pause(10000)

        let elm4 = await browser.findElement("id","subject")
        await browser.pause(10000)
        await browser.elementSendKeys(elm4['ELEMENT'],"SHIRA IS THE BEST TEACHER IN THE WORLD!‏")
        await browser.pause(10000)

        // let elm5 = await browser.findElement("id","composearea_tap_trap_bottom")
        // await browser.pause(8000)
        // await browser.elementSendKeys(elm5['ELEMENT'],"SHIRA IS THE BEST TEACHER IN THE WORLD!!‏")
        // await browser.pause(8000)

        send=await browser.findElement("id", "send")
        await browser.elementClick(send["ELEMENT"])
        await browser.pause(15000)

        await browser.deleteSession()
    } catch (error) {
        console.error(error)
    }
}
//calling the above function.
functionName()
