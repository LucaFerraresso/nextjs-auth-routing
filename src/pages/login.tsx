import { NextPage } from 'next';
    import { useState } from 'react';
    import { motion } from 'framer-motion';
    import { useRouter } from 'next/router';
    import { Mail, Lock } from 'lucide-react';
    import Link from 'next/link';

    const Login: NextPage = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const router = useRouter();

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
        localStorage.setItem('userEmail', email);
        router.push('/dashboard');
      };

      return (
        <div className="container mx-auto p-4">
          <motion.h1
            className="text-3xl font-bold text-center text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Login
          </motion.h1>

          <motion.form
            className="mt-8 max-w-md mx-auto space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-text-secondary" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full pl-10 border-tertiary rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-primary">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-text-secondary" />
                </div>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full pl-10 border-tertiary rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Login
              </button>
            </div>
          </motion.form>
          <div className="mt-4 text-center">
            <Link href="/register" legacyBehavior>
              <a className="text-primary hover:underline">Register</a>
            </Link>
            <span className="mx-2 text-text-secondary">|</span>
            <Link href="/password-reset" legacyBehavior>
              <a className="text-primary hover:underline">Forgot Password?</a>
            </Link>
          </div>
        </div>
      );
    };

    export default Login;
