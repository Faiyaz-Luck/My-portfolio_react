import React from "react";
import "./App.css";

const tools = [
  { id: "git", icon: "fab fa-git-alt", name: "Git", desc: "Version control" },
  { id: "jenkins", icon: "fas fa-code-branch", name: "Jenkins", desc: "CI/CD" },
  { id: "docker", icon: "fab fa-docker", name: "Docker", desc: "Containerization" },
  { id: "kubernetes", icon: "fas fa-project-diagram", name: "Kubernetes", desc: "Orchestration" },
  { id: "ansible", icon: "fas fa-cogs", name: "Ansible", desc: "Config Mgmt" },
  { id: "terraform", icon: "fas fa-code", name: "Terraform", desc: "Infra as Code" },
  { id: "prometheus", icon: "fas fa-chart-line", name: "Prometheus", desc: "Monitoring" },
  { id: "grafana", icon: "fas fa-tachometer-alt", name: "Grafana", desc: "Dashboarding" },
];

const projects = [
  {
    icon: "fas fa-heartbeat",
    name: "Healthcare Project",
    link: "https://github.com/Faiyaz-Luck/healthcare-project",
  },
  {
    icon: "fas fa-shield-alt",
    name: "Insurance Project",
    link: "https://github.com/Faiyaz-Luck/insurance-project",
  },
];

const installs = [
  {
    id: "git",
    name: "Git",
    code: `sudo apt update\nsudo apt install git -y\ngit --version`,
  },
  {
    id: "jenkins",
    name: "Jenkins",
    code: `wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -\nsudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'\nsudo apt update\nsudo apt install jenkins -y\nsudo systemctl start jenkins`,
  },
  {
    id: "docker",
    name: "Docker",
    code: `sudo apt update\nsudo apt install docker.io -y\nsudo systemctl start docker\nsudo systemctl enable docker\ndocker --version`,
  },
  {
    id: "kubernetes",
    name: "Kubernetes (kubectl & minikube)",
    code: `curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s \\
https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl\nchmod +x kubectl\nsudo mv kubectl /usr/local/bin/`,
  },
  {
    id: "ansible",
    name: "Ansible",
    code: `sudo apt update\nsudo apt install ansible -y\nansible --version`,
  },
  {
    id: "terraform",
    name: "Terraform",
    code: `sudo apt update\nsudo apt install wget unzip -y\nwget https://releases.hashicorp.com/terraform/1.7.5/terraform_1.7.5_linux_amd64.zip\nunzip terraform_1.7.5_linux_amd64.zip\nsudo mv terraform /usr/local/bin/\nterraform -version`,
  },
  {
    id: "prometheus",
    name: "Prometheus",
    code: `wget https://github.com/prometheus/prometheus/releases/download/v2.50.0/prometheus-2.50.0.linux-amd64.tar.gz\ntar xvf prometheus-2.50.0.linux-amd64.tar.gz\ncd prometheus-2.50.0.linux-amd64\n./prometheus`,
  },
  {
    id: "grafana",
    name: "Grafana",
    code: `sudo apt install -y apt-transport-https software-properties-common\nsudo add-apt-repository \"deb https://packages.grafana.com/oss/deb stable main\"\nsudo apt update\nsudo apt install grafana -y\nsudo systemctl start grafana-server\nsudo systemctl enable grafana-server`,
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Faiyaz - DevOps Engineer</h1>
        <p>Email: abdul.faiyaz.shukor@gmail.com | Contact: 9884939021</p>
        <p>
          <a href="https://github.com/Faiyaz-Luck" target="_blank">GitHub</a> |{' '}
          <a href="https://www.linkedin.com/in/your-link" target="_blank">LinkedIn</a>
        </p>
      </header>

      <section className="about">
        <h2>My DevOps Journey</h2>
        <p>My journey began with a conversation with a close friend...</p>
        <p>
          <strong>Past Work Experience (Non-IT):</strong>
          <br />Concentrix Technologies – Networking Agent for Symantec (2016–2019)
          <br />WNS – Sr Ops Associate
          <br />CaratLane – Jewellery Expert
        </p>
      </section>

      <section>
        <h2>DevOps Tools</h2>
        <div className="tools">
          {tools.map((tool) => (
            <a key={tool.id} className="tool" href={`#${tool.id}`}>
              <i className={tool.icon}></i>
              <p>
                <strong>{tool.name}</strong>
                <br />
                {tool.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((project, idx) => (
            <div key={idx} className="project">
              <i className={project.icon}></i>
              <p>
                <strong>{project.name}</strong>
              </p>
              <a href={project.link} target="_blank">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {installs.map((tool) => (
        <section key={tool.id} id={tool.id} className="install-section">
          <h3>Install {tool.name}</h3>
          <pre>{tool.code}</pre>
        </section>
      ))}

      <footer>
        &copy; 2025 Faiyaz - DevOps Portfolio | Built with 💚 DevOps
      </footer>
    </div>
  );
}

export default App;

