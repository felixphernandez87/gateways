import crypto from 'crypto';

// Credenciales básicas para el usuario administrador
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'password';

/**
 * Basic login handler that generates a random token when the provided
 * credentials match the configured admin user and password.
 * Credentials can be customised using the ADMIN_USER and ADMIN_PASS
 * environment variables.
 */
const login = (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = crypto.randomBytes(16).toString('hex');
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

export { login };
