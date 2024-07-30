
// @ts-ignore
import script from "./scripts/comments.inline"
import style from "./styles/comments.scss"

import { QuartzComponentProps, QuartzComponentConstructor } from "./types"
import 'giscus';

export default (() => {
    
    function Comments(props: QuartzComponentProps) { 
      return (
        <>
          <div id="giscus-container">

          </div>
        </>
      )
    }
    
    Comments.beforeDOMLoaded=script;
    Comments.css = style;
    return Comments
  }) satisfies QuartzComponentConstructor