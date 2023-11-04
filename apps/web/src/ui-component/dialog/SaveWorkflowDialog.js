import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, OutlinedInput } from '@mui/material'
import { StyledButton } from 'ui-component/StyledButton'

const SaveWorkflowDialog = ({ show, dialogProps, onCancel, onConfirm }) => {
    // const portalElement = document.getElementById('portal')

    const [workflowName, setWorkflowName] = useState('')
    const [isReadyToSave, setIsReadyToSave] = useState(false)

    useEffect(() => {
        if (workflowName) setIsReadyToSave(true)
        else setIsReadyToSave(false)
    }, [workflowName])

    const component = show ? (
        <Dialog
            open={show}
            fullWidth
            maxWidth='xs'
            onClose={onCancel}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                {dialogProps.title}
            </DialogTitle>
            <DialogContent>
                <OutlinedInput
                    sx={{ mt: 1 }}
                    id='workflow-name'
                    type='text'
                    fullWidth
                    placeholder='My New Workflow'
                    value={workflowName}
                    onChange={(e) => setWorkflowName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>{dialogProps.cancelButtonName}</Button>
                <StyledButton disabled={!isReadyToSave} variant='contained' onClick={() => onConfirm(workflowName)}>
                    {dialogProps.confirmButtonName}
                </StyledButton>
            </DialogActions>
        </Dialog>
    ) : null

    return component
}

SaveWorkflowDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
}

export default SaveWorkflowDialog
