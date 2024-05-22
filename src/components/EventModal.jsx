import React from 'react';

const EventModal = ({ isOpen, onClose, onSave, eventText, setEventText }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Add practice session</h2>
        <input
          type="text"
          value={eventText}
          onChange={(e) => setEventText(e.target.value)}
          placeholder="Session details"
        />
        <button onClick={onSave}>Save</button>
      </div>
    </div>
  );
};

export default EventModal;