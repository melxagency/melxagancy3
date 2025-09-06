import React, { useState } from 'react';
import { 
  Users, 
  FileText, 
  MessageSquare, 
  HelpCircle, 
  BarChart3, 
  Settings,
  Home,
  LogOut,
  Shield
} from 'lucide-react';
import UserManagement from './UserManagement';

interface AdminPanelProps {
  user: any;
  onLogout: () => void;
}

export default function AdminPanel({ user, onLogout }: AdminPanelProps) {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showUserManagement, setShowUserManagement] = useState(false);

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    window.location.reload();
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'users', label: 'Usuarios', icon: Users },
    { id: 'blog', label: 'Blog Posts', icon: FileText },
    { id: 'requests', label: 'Solicitudes', icon: MessageSquare },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <Users className="w-8 h-8 text-[#0e368d]" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Usuarios</p>
                    <p className="text-2xl font-semibold text-gray-900">12</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <FileText className="w-8 h-8 text-[#942ace]" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Blog Posts</p>
                    <p className="text-2xl font-semibold text-gray-900">24</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Solicitudes</p>
                    <p className="text-2xl font-semibold text-gray-900">8</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <HelpCircle className="w-8 h-8 text-yellow-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">FAQs</p>
                    <p className="text-2xl font-semibold text-gray-900">15</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Actividad Reciente</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Nueva solicitud de servicio recibida</span>
                  <span className="text-xs text-gray-400">Hace 2 horas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Nuevo post del blog publicado</span>
                  <span className="text-xs text-gray-400">Hace 5 horas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Usuario registrado en el sistema</span>
                  <span className="text-xs text-gray-400">Hace 1 día</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Gestión de Usuarios</h2>
              <button
                onClick={() => setShowUserManagement(true)}
                className="bg-[#0e368d] text-white px-4 py-2 rounded-lg hover:bg-[#0c2d75] transition-colors flex items-center space-x-2"
              >
                <Users className="w-4 h-4" />
                <span>Administrar Usuarios</span>
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-gray-600">
                Desde aquí puedes gestionar todos los usuarios del sistema, crear nuevos usuarios, 
                editar permisos y eliminar cuentas cuando sea necesario.
              </p>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {menuItems.find(item => item.id === activeSection)?.label}
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-gray-600">
                Esta sección está en desarrollo. Próximamente tendrás acceso a todas las funcionalidades.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Shield className="w-8 h-8 text-[#0e368d]" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-[#0e368d] to-[#942ace] bg-clip-text text-transparent">
                Panel de Administración
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Bienvenido, <span className="font-medium">{user?.name}</span>
              </span>
              <button
                onClick={navigateToHome}
                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1"
              >
                <Home className="w-4 h-4" />
                <span>Ir al Sitio</span>
              </button>
              <button
                onClick={onLogout}
                className="text-red-600 hover:text-red-900 transition-colors flex items-center space-x-1"
              >
                <LogOut className="w-4 h-4" />
                <span>Cerrar Sesión</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="mt-8">
            <div className="px-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-[#0e368d] text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>

      {/* User Management Modal */}
      {showUserManagement && (
        <UserManagement onClose={() => setShowUserManagement(false)} />
      )}
    </div>
  );
}