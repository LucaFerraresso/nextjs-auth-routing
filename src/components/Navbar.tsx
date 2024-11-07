import Link from 'next/link';
    import { motion } from 'framer-motion';

    export const Navbar = () => {
      return (
        <nav className="bg-white shadow-md py-4 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">
              <Link href="/">
                <a>My App</a>
              </Link>
            </h1>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="text-primary hover:underline">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/login" legacyBehavior>
                  <a className="text-primary hover:underline">Login</a>
                </Link>
              </li>
              <li>
                <Link href="/register" legacyBehavior>
                  <a className="text-primary hover:underline">Register</a>
                </Link>
              </li>
              <li>
                <Link href="/dashboard" legacyBehavior>
                  <a className="text-primary hover:underline">Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href="/password-reset" legacyBehavior>
                  <a className="text-primary hover:underline">Password Reset</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    };
