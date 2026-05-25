import React from "react"
import { DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

interface Props {
    className?: string
}

export const VisuallyHiddenBlock: React.FC<Props> = ({ className }) => {
    return (
        <React.Fragment>
            <VisuallyHidden asChild>
                <DialogTitle>title</DialogTitle>
            </VisuallyHidden>

            <VisuallyHidden asChild>
                <DialogDescription>description</DialogDescription>
            </VisuallyHidden>
        </React.Fragment>
    )
}
