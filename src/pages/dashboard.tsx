import { NextPage } from 'next';
    import { motion } from 'framer-motion';
    import { User } from 'lucide-react';
    import Link from 'next/link';
    import { useState, useEffect } from 'react';
    import { useRouter } from 'next/router';

    const Dashboard: NextPage = () => {
      const [userName, setUserName] = useState('');
      const router = useRouter();

      // Simulate fetching user name from local storage
      const fetchUserName = () => {
        const email = localStorage.getItem('userEmail');
        if (email) {
          const name = email.split('@')[0];
          setUserName(name);
        }
      };

      useEffect(() => {
        fetchUserName();
      }, []); // Run only once when the component mounts

      const handleLogout = () => {
        localStorage.clear();
        router.push('/login');
      };

      return (
        <div className="container mx-auto p-4">
          <motion.h1
            className="text-3xl font-bold text-center text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome, {userName}!
          </motion.h1>

          <motion.div
            className="mt-8 max-w-md mx-auto space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-text-primary">Profile</h3>
                <p className="mt-1 max-w-2xl text-sm text-text-secondary">Personal details</p>
              </div>
              <div className="border-t border-tertiary">
                <dl>
                  <div className="bg-secondary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-text-primary">Full name</dt>
                    <dd className="mt-1 text-sm text-text-primary sm:mt-0 sm:col-span-2">{userName}</dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-text-primary">Email address</dt>
                    <dd className="mt-1 text-sm text-text-primary sm:mt-0 sm:col-span-2">{localStorage.getItem('userEmail')}</dd>
                  </div>
                  <div className="bg-secondary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-text-primary">Role</dt>
                    <dd className="mt-1 text-sm text-text-primary sm:mt-0 sm:col-span-2">Admin</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link href="/login" legacyBehavior>
                <a className="text-primary hover:underline">Login</a>
              </Link>
              <span className="mx-2 text-text-secondary">|</span>
              <Link href="/register" legacyBehavior>
                <a className="text-primary hover:underline">Register</a>
              </Link>
              <span className="mx-2 text-text-secondary">|</span>
              <button
                onClick={handleLogout}
                className="text-primary hover:underline"
              >
                Logout
              </button>
            </div>
          </motion.div>
        </div>
      );
    };

    export default Dashboard;
