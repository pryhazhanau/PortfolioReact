import RoundButton from "../../../../components/common/controls/round-button/RoundButton"
import "./GridButtonsBlock.css"

import { FC, useState } from "react"

interface BlockProps {
    onSelectSection: (id: number, name: string, postfix: string) => void
}

const GridButtonsBlock: FC<BlockProps> = ( { onSelectSection } ) => {
  const [selectedId, setSelectedId] = useState(0)
  const onSectionSelection = (sectionId: number, sectionName: string, postfixPhrase: string) => {
    setSelectedId(sectionId)
    onSelectSection(sectionId, sectionName, postfixPhrase)
  }

  return (
    <>
      <div className="grid-buttons-wrapper">
        <div className="buttons-flex-wrapper">
          {sections.map((item) => (
            <div key={item.id}>
              <RoundButton
                active={item.id == selectedId}
                label={item.name}
                onClick={() => {
                  onSectionSelection(item.id, item.name, item.postfixPhrase)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const sections = [
  { id: 0, name: "Architectures", postfixPhrase: "I use" },
  { id: 1, name: "Libs", postfixPhrase: "I love" },
  { id: 2, name: "Projects", postfixPhrase: "I developed" },
  { id: 3, name: "Experience", postfixPhrase: "I have" },
]

export default GridButtonsBlock
