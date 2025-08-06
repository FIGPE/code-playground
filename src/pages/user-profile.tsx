import { motion, type Variants } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Shield, Settings, Activity, Database, Users, Key } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function UserProfile() {
  const admin = {
    name: "Admin Tobiloba",
    email: "admin.toby@company.com",
    avatar: "/admin-avatar.jpg",
    role: "Super Admin",
    joinDate: "Admin since Jan 2025",
    bio: "System administrator with full privileges. Responsible for platform security, user management, and system configuration.",
    stats: {
      users: 2543,
      activeSessions: 189,
      storageUsed: "1.2TB",
    },
    permissions: [
      { name: "User Management", icon: <Users className="w-4 h-4" /> },
      { name: "System Config", icon: <Settings className="w-4 h-4" /> },
      { name: "Database Access", icon: <Database className="w-4 h-4" /> },
      { name: "Security Controls", icon: <Shield className="w-4 h-4" /> },
      { name: "Audit Logs", icon: <Activity className="w-4 h-4" /> },
    ],
    recentActivity: [
      { action: "Updated security policies", time: "2 hours ago" },
      { action: "Reset user password", time: "5 hours ago" },
      { action: "Performed system backup", time: "1 day ago" },
    ],
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gray-50 font-[sora] py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border border-gray-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-10 text-white">
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
              >
                <Avatar className="h-32 w-32 border-4 border-white/20">
                  <AvatarImage src={admin.avatar} alt={admin.name} />
                  <AvatarFallback className="bg-blue-800 text-white">
                    <Key className="w-8 h-8" />
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <motion.h1 
                      variants={itemVariants}
                      className="text-4xl font-bold tracking-tight"
                    >
                      {admin.name}
                    </motion.h1>
                    <motion.div variants={itemVariants}>
                      <Badge variant="secondary" className="text-sm px-4 py-1.5 bg-white text-blue-800">
                        <Shield className="mr-2 h-4 w-4" />
                        {admin.role}
                      </Badge>
                    </motion.div>
                  </div>
                  <motion.p variants={itemVariants} className="text-blue-100">
                    {admin.email}
                  </motion.p>
                  <motion.p variants={itemVariants} className="text-sm text-blue-200">
                    {admin.joinDate}
                  </motion.p>
                </div>
              </motion.div>
            </CardHeader>

            <CardContent className="px-8 py-8 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="space-y-8 lg:col-span-2">
                  <motion.section variants={itemVariants} className="space-y-4">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <Settings className="w-6 h-6" /> Admin Overview
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {admin.bio}
                    </p>
                  </motion.section>

                  <Separator className="my-6" />

                  <motion.section variants={itemVariants} className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <Activity className="w-6 h-6" /> System Statistics
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {Object.entries(admin.stats).map(([key, value]) => (
                        <motion.div 
                          key={key}
                          variants={itemVariants}
                          whileHover={{ scale: 1.03 }}
                          className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm"
                        >
                          <p className="text-3xl font-bold text-blue-800">
                            {value}
                          </p>
                          <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>

                  <Separator className="my-6" />

                  <motion.section variants={itemVariants} className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <Database className="w-6 h-6" /> Recent Activity
                    </h2>
                    <div className="space-y-4">
                      {admin.recentActivity.map((activity, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                          </div>
                          <div>
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-gray-500">{activity.time}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <motion.section variants={itemVariants} className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <Shield className="w-6 h-6" /> Admin Permissions
                    </h2>
                    <div className="grid grid-cols-1 gap-3">
                      {admin.permissions.map((permission) => (
                        <motion.div
                          key={permission.name}
                          variants={itemVariants}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                        >
                          <div className="p-2 rounded-full bg-blue-100 text-blue-800">
                            {permission.icon}
                          </div>
                          <span className="font-medium">{permission.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>

                  <Separator className="my-6" />

                  <motion.section variants={itemVariants} className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <Key className="w-6 h-6" /> Security Settings
                    </h2>
                    <div className="space-y-6">
                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label>Two-Factor Authentication</Label>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Enabled (SMS + Authenticator)</span>
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </div>
                      </motion.div>
                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label>Session Management</Label>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">3 active sessions</span>
                          <Button variant="outline" size="sm">
                            View All
                          </Button>
                        </div>
                      </motion.div>
                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label>Password</Label>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Last changed 30 days ago</span>
                          <Button variant="outline" size="sm">
                            Change
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                  </motion.section>

                  <Separator className="my-6" />

                  <motion.section variants={itemVariants}>
                    <Button variant="destructive" className="w-full">
                      Emergency Lockdown
                    </Button>
                  </motion.section>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}