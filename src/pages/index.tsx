import type { NextPage } from 'next';
    import Head from 'next/head';
    import Link from 'next/link';
    import { motion } from 'framer-motion';

    const Home: NextPage = () => {
      return (
        <div className="container mx-auto p-4">
          <Head>
            <title>Next.js App</title>
            <meta name="description" content="Next.js App with Tailwind CSS and Framer Motion" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="text-center">
            <motion.h1
              className="text-4xl font-bold text-primary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to Next.js!
            </motion.h1>

            <motion.p
              className="mt-4 text-lg text-text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Get started by editing <code className="bg-secondary p-1 rounded">pages/index.tsx</code>
            </motion.p>

            <div className="mt-8 space-x-4">
              <Link href="/login" legacyBehavior>
                <a className="text-primary hover:underline">Login</a>
              </Link>
              <Link href="/register" legacyBehavior>
                <a className="text-primary hover:underline">Register</a>
              </Link>
              <Link href="/dashboard" legacyBehavior>
                <a className="text-primary hover:underline">Dashboard</a>
              </Link>
              <Link href="/password-reset" legacyBehavior>
                <a className="text-primary hover:underline">Password Reset</a>
              </Link>
            </div>
          </main>
        </div>
      );
    };

    export default Home;
