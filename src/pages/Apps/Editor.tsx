import React, { FC } from 'react'
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor'

import { EditorData } from '../../data/dummy'
import { Header } from '../../components'

type Props = {

}

export const Editor: FC<Props> = () => {
  const a = 1

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Mini Apps" title="Editor" />
      <RichTextEditorComponent>

        {/* text in view as component (html) */}
        {/* <EditorData /> */}

        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}
