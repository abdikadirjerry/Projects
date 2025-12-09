import { useState } from 'react';

export default function HotelBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    breakfast: false,
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date required';
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date required';
    if (!formData.roomType) newErrors.roomType = 'Please select a room';
    if (!formData.agree) newErrors.agree = 'You must agree to terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Booking submitted:', formData);
      alert('Booking confirmed! We’ll email your receipt.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2> Hotel Booking Form (Somaliland)</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            style={{ width: '100%', padding: '6px', marginTop: '4px' }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div style={{ marginTop: '1rem' }}>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            style={{ width: '100%', padding: '6px', marginTop: '4px' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        {/* Dates */}
        <div style={{ marginTop: '1rem' }}>
          <label>Check-in:</label>
          <input
            name="checkIn"
            type="date"
            value={formData.checkIn}
            onChange={handleChange}
            style={{ width: '100%', padding: '6px', marginTop: '4px' }}
          />
          {errors.checkIn && <p style={{ color: 'red' }}>{errors.checkIn}</p>}
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Check-out:</label>
          <input
            name="checkOut"
            type="date"
            value={formData.checkOut}
            onChange={handleChange}
            style={{ width: '100%', padding: '6px', marginTop: '4px' }}
          />
          {errors.checkOut && <p style={{ color: 'red' }}>{errors.checkOut}</p>}
        </div>

        {/* Room Type */}
        <div style={{ marginTop: '1rem' }}>
          <label>Room Type:</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            style={{ width: '100%', padding: '6px', marginTop: '4px' }}
          >
            <option value="">-- Select --</option>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Executive Suite</option>
          </select>
          {errors.roomType && <p style={{ color: 'red' }}>{errors.roomType}</p>}
        </div>

        {/* Breakfast */}
        <div style={{ marginTop: '1rem' }}>
          <label>
            <input
              name="breakfast"
              type="checkbox"
              checked={formData.breakfast}
              onChange={handleChange}
            />
            Include breakfast (free)
          </label>
        </div>

        {/* Terms */}
        <div style={{ marginTop: '1rem' }}>
          <label>
            <input
              name="agree"
              type="checkbox"
              checked={formData.agree}
              onChange={handleChange}
            />
            I agree to the hotel terms and privacy policy
          </label>
          {errors.agree && <p style={{ color: 'red' }}>{errors.agree}</p>}
        </div>

        <button
          type="submit"
          style={{
            marginTop: '1.5rem',
            padding: '8px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Book Now
        </button>
      </form>
    </div>
  );
}


