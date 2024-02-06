import React from 'react';
import { Button, Dialog, Card, CardBody, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const DeleteConfirmation = ({ isOpen, onClose, onDelete, entityName, deletingRow }) => {
    return (
        <Dialog size="xs" open={isOpen} handler={onClose}>
            <Card className="mx-auto w-full max-w-[24rem]">
                <CardBody className="flex flex-col gap-4">
                    <Typography variant="h4" color="blue-gray">
                        Delete {entityName}
                    </Typography>
                    <Typography variant="body2">
                        Are you sure you want to delete the {entityName.toLowerCase()} "{deletingRow?.cells[1]}"?
                    </Typography>
                    <div className="flex gap-4">
                        <Button variant="gradient" className="bg-red cursor-pointer" onClick={onDelete}>
                            DELETE
                        </Button>
                        <Button variant="outline" onClick={onClose}>
                            CANCEL
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </Dialog>
    );
};

DeleteConfirmation.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    entityName: PropTypes.string.isRequired,
    deletingRow: PropTypes.object,
};

export default DeleteConfirmation;
