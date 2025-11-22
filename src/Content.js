import { react } from "react";
import { motion, useTransform, useScroll } from "framer-motion";


function Content() {
    const { scrollY, scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
    return (
        <>


            <div style={{ height: '500px' }}>
                <p>Non reprehenderit fugiat consequat ut Lorem exercitation mollit pariatur
                    adipisicing aliqua dolore adipisicing. Sunt est Lorem sit nulla. Sunt ad eu incididunt minim quis eiusmod amet et. Ullamco sint qui mollit est cillum. Nisi nisi incididunt
                    voluptate irure occaecat irure cupidatat. Eu sit qui nulla dolor cupidatat
                    irure eu velit aute anim veniam pariatur eiusmod. Et eu ea pariatur labore do do tempor qui laborum velit veniam.
                </p>
            </div>
            <div style={{ height: '500px' }}>
                <p>Non reprehenderit fugiat consequat ut Lorem exercitation mollit pariatur
                    adipisicing aliqua dolore adipisicing. Sunt est Lorem sit nulla. Sunt ad eu incididunt minim quis eiusmod amet et. Ullamco sint qui mollit est cillum. Nisi nisi incididunt
                    voluptate irure occaecat irure cupidatat. Eu sit qui nulla dolor cupidatat
                    irure eu velit aute anim veniam pariatur eiusmod. Et eu ea pariatur labore do do tempor qui laborum velit veniam.
                </p>
            </div>

            <motion.div
                style={{ scale }}
            >
                <motion.div
                    style={{
                        scaleY: scrollYProgress
                    }}
                />
                <div style={{ height: '500px',alignItems:'center',justifyContent:'center',textAlign:'center' }}>
                    <p>Non reprehenderit fugiat consequat ut Lorem exercitation mollit pariatur
                        adipisicing aliqua dolore adipisicing. Sunt est Lorem sit nulla. Sunt ad eu incididunt minim quis eiusmod amet et. Ullamco sint qui mollit est cillum. Nisi nisi incididunt
                        voluptate irure occaecat irure cupidatat. Eu sit qui nulla dolor cupidatat
                        irure eu velit aute anim veniam pariatur eiusmod. Et eu ea pariatur labore do do tempor qui laborum velit veniam.
                    </p>
                </div>
            </motion.div>
            <p>Non reprehenderit fugiat consequat ut Lorem exercitation mollit pariatur
                adipisicing aliqua dolore adipisicing. Sunt est Lorem sit nulla. Sunt ad eu incididunt minim quis eiusmod amet et. Ullamco sint qui mollit est cillum. Nisi nisi incididunt
                voluptate irure occaecat irure cupidatat. Eu sit qui nulla dolor cupidatat
                irure eu velit aute anim veniam pariatur eiusmod. Et eu ea pariatur labore do do tempor qui laborum velit veniam.
            </p>
            <motion.div
                style={{ scale }}
            >
                <motion.div
                    style={{
                        scaleY: scrollYProgress,
                        height: '500px'
                    }}
                />
                <p style={{ width: '100%', fontFamily: "sans-serif" }}>Non reprehenderit fugiat consequat ut Lorem exercitation mollit pariatur
                    adipisicing aliqua dolore adipisicing. Sunt est Lorem sit nulla. Sunt ad eu incididunt minim quis eiusmod amet et. Ullamco sint qui mollit est cillum. Nisi nisi incididunt
                    voluptate irure occaecat irure cupidatat. Eu sit qui nulla dolor cupidatat
                    irure eu velit aute anim veniam pariatur eiusmod. Et eu ea pariatur labore do do tempor qui laborum velit veniam.
                </p>
            </motion.div>
            <div style={{height:'500px'}}>
                <p>Non reprehenderit fugiat consequat ut Lorem exercitation mollit pariatur
                    adipisicing aliqua dolore adipisicing. Sunt est Lorem sit nulla. Sunt ad eu incididunt minim quis eiusmod amet et. Ullamco sint qui mollit est cillum. Nisi nisi incididunt
                    voluptate irure occaecat irure cupidatat. Eu sit qui nulla dolor cupidatat
                    irure eu velit aute anim veniam pariatur eiusmod. Et eu ea pariatur labore do do tempor qui laborum velit veniam.
                </p>
                </div>

        </>
    );
}

export default Content;